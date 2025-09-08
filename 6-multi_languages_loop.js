const [, , ...languages] = process.argv;

for (const lang of languages) {
  console.log(lang);
}

