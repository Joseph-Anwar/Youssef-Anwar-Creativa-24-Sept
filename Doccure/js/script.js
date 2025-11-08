 const cursor = document.querySelector('.custom-cursor');
        const links = document.querySelectorAll('a, button');

      
        document.addEventListener('mousemove', (e) => {
           
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });


        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            link.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });



        