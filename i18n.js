module.exports = {
    locales: ['en', 'fr', 'de', 'es', 'hi', 'ru'],
    defaultLocale: 'en',
    pages: {
        '*': ['common'],
        '/': ['index'],
        '/coming_soon': ['coming_soon'],
        '/about': ['about'],
        '/supporters': ['supporters'],
    },
    interpolation: {
        prefix: '${',
        suffix: '}',
    },
    loadLocaleFrom: (locale, namespace) =>
        import(`./src/locales/${locale}/${namespace}`).then((m) => m.default),
}
