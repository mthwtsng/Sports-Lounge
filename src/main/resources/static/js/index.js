new Vue({
    el: '#app',
    methods: {
        navigate(page) {
            switch (page) {
                case 'login':
                    console.log('Navigating to:', page);
                    window.location.href = '/login';
                    break;
                case 'signup':
                    console.log('Navigating to:', page);
                    window.location.href = '/signup';
                    break;
                default:
                    break;
            }
        }
    }
});
