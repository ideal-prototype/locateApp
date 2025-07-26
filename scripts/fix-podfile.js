import fs from 'fs';
import path from 'path';

const podfilePath = path.join(__dirname, '..', 'ios', 'Podfile');

if (fs.existsSync(podfilePath)) {
  let podfileContent = fs.readFileSync(podfilePath, 'utf8');

  if (!podfileContent.includes('use_modular_headers!')) {
    console.log('🔧 Adding use_modular_headers! to Podfile...');
    podfileContent = podfileContent.replace(
      /platform :ios, ['"][0-9.]+['"]/,
      match => `${match}\nuse_modular_headers!`
    );

    fs.writeFileSync(podfilePath, podfileContent, 'utf8');
    console.log('✅ Podfile patched successfully.');
  } else {
    console.log('ℹ️ Podfile already contains use_modular_headers!. Skipping.');
  }
} else {
  console.log('⚠️ Podfile not found. Skipping patch.');
}
