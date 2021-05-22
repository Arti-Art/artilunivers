export default function ArtiTestModule(moduleOptions) {
  console.log(moduleOptions.token)
  console.log(this.options.testMessage);

  this.nuxt.hook('ready', async nuxt => {
    console.log('Nuxt is ready. From ArtiTestModule.');
  })
}