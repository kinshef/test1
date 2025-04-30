document.addEventListener('DOMContentLoaded', function() {
    const mobile = window.innerWidth < 991;
    document.querySelector('#btn_menu').addEventListener('click', function() {
        document.querySelector('.header-main').classList.toggle('open');
    });


    if(mobile) {
        document.querySelectorAll('.header-bottom__naw').forEach(item => {
            item.addEventListener('click', () => {
                if(item.nextElementSibling?.classList.contains('header-bottom__submenu')) {
                    item.nextElementSibling.classList.toggle('active');
                }
            });
        });
    } else { 
        document.querySelectorAll('.header-bottom__submenu').forEach(item => {
            item.addEventListener('mouseenter', () => item.previousElementSibling.classList.add('hover'));
            item.addEventListener('mouseleave', () => item.previousElementSibling.classList.remove('hover'));
        });
    }

    document.querySelectorAll('.header-submenu').forEach(item => {
        const wraps = item.querySelectorAll('.header-submenu__wrap');
        const navItems = item.querySelectorAll('.header-submenu__naw, .header-submenu__naw2');
        
        navItems.forEach((navItem, index) => {
            navItem.addEventListener(mobile ? 'click' : 'mouseenter', () => {
                if(!navItem.classList.contains('header-submenu__naw2') || mobile) {
                    wraps.forEach(wrap => wrap.classList.remove('active'));
                    navItems.forEach(nav => nav.classList.remove('hover'));
                }
                
                const currentWrap = wraps[index];
                if (currentWrap) {
                    currentWrap.classList.add('active', 'prev');
                    currentWrap.style.height = `${currentWrap.scrollHeight}px`;
                }
                
                navItem.classList.add('hover');
            });
        });
    });

    // в десктопе(!mobile) убрать изменение высоты, + при click или mouseenter убирать все предыдущие высоты

    document.querySelectorAll('.mobile__prev').forEach(button => {
        button.addEventListener('click', function() {
            const submenu = this.closest('.header-bottom__submenu');
            const submenu2 = this.closest('.header-submenu__wrap.prev');
            
            if(submenu2) {
                submenu2.classList.toggle('active');
                submenu2.classList.toggle('prev');
                document.querySelector('.header-submenu__wrap.prev')?.classList.add('active');
            } else if (submenu) {
                submenu.classList.toggle('active');
            }
        });
    });

    
});