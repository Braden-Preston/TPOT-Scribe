const path = require('path')

const resolve = paths => path.resolve(process.cwd(), paths)

module.exports = {
  pugWebpackAlias: alias => {
    Object.keys(alias).map(key => {
      alias[`./${key}`] = resolve(alias[key])
      delete alias[key]
    })
    return alias
  },
  pugSnowpackAlias: alias => {
    Object.keys(alias).map(key => {
      alias[`${key}`] = resolve(alias[key])
    })
    return alias
  }
}

// const componentFolderPattern = (alias, srcPath) => {
//   let filePath = alias.replace(/@\w+/, srcPath);
//   let indexPath = filePath.replace(/\.pug/, "/index.pug");
//   let realFilePath = path.join(process.cwd(), filePath);
//   let realIndexPath = path.join(process.cwd(), indexPath);
//   let existsFile = false;
//   let existsFolder = false;
//   try {
//     existsFile = fs.existsSync(realFilePath);
//   } finally {
//     try {
//       existsFolder = fs.existsSync(realIndexPath);
//     } catch {}
//   }
//   if (!existsFile && !existsFolder) {
//     console.warn(`[pug-plugin-alias] could not find file: ${alias}`);
//     return alias;
//   }
//   return existsFolder ? indexPath : filePath;
// };

// const pugFolder = (s, d) => {
//   let srcpth = s.replace(/@\w+/, d);
//   let isfolder = !fs.existsSync(path.join(__dirname, srcpth));
//   return isfolder ? srcpth.replace(/.pug/, "/index.pug") : srcpth;
// };

// module.exports = {
//   pugAlias: (alias) => {
//     const config = {};
//     Object.keys(alias).map((key) => {
//       config[key] = (a) => componentFolderPattern(a, alias[key]);
//     });
//     return pugSmartAlias({
//       alias: config,
//     });
//   },
// };
