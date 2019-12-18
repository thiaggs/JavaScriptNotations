// -------WINDOW METHODS / Objects / Properties ------

    // • Alert.

        alert('hello world');

    // • Prompt 

        const input = prompt();
        alert(input);

    // • Confirm 

        if(confirm('Are you sure?')){

            console.log(`YES`);
        }else{
            console.log(`NO`)
        }

    // • Properties

        let val;

        // - Outer heigh adn width
            val = window.outerHeight;
            val = window.outerWidth;

        // - Innter heigh adn width
            val = window.innerHeight;
            val = window.innerWidth;


        // - Scroll Points

            val = window.scrollY;
            val = window.scrollX;
        
    // • Location Object

            val = window.location;
            val = window.location.hostname;
            val = window.location.port;
            val = window.location.href;
            val = window.location.search; // see the query params

        // Redirect
            window.location.href = 'https://www.google.com/'
        
        //Reload
            window.location.reload();

    // • History Object

        window.history.go(-3);
        val = window.history.length;

    // • Navigator Object

        val = window.navigator;
        val = window.navigator.appName;
        
        console.log(val);

    //----------------Var Global Scope------------------------------=

        var a = 0;

        // • Não altera a var global 
            for(let a = 0; a < 10; a++){ L
                console.log(a);
            }

            function test(){
                var a = 5;
            }

        // =============================

        // • Altera a var global

            for(var a = 0; a < 10; a++){ 
                console.log(a);
            }

            function test(){
                a = 5;
            }

        // ===============================
    

        console.log(a);

    //-------------------------------------------------------


//--------------------------------