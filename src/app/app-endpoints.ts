export class AppEndpoints {
    static auth = {
        login: '/auth/login',
        logout: '/auth/logout',
        loginCompany : '/auth/loginCompany',
        registration : '/auth/registration',
        registrationCompany:'/auth/registrationCompany',
        me:'/auth/me/',
        mecompany:'/auth/mecompany/',
        update:'/auth/update/'

    };
    static user = {
        restorePwd : '/user/forget-pwd',
        
       
    };
    static company = {
        details : '/company/details',
        
    }
    static intership = {
        add:'/intership/add/',
        list:'/intership/list',
        delete: '/intership/delete/',
        one:'/intership/one/'
    }
}
