export const black = '#322e2f'
export const cyan = '#12a4d9'
export const gray = 'gray'


export const NAV_LINKS = (logged) => logged ? [
    {
        'link': '/cars',
        'text': 'Аутомобили'
    },
    {
        'link': '/my-profile',
        'text': 'Профил'
    }
] : [
    {
        'link': '/cars',
        'text': 'Аутомобили'
    },
    {
        'link': '/register',
        'text': 'Регистрација'
    },
    {
        'link': '/login',
        'text': 'Пријави се'
    } 
]