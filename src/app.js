export class App {


    configureRouter(config, router) {


        //Comment out these lines below (until promise) to see the routes actually show up
        this.router = router;
        config.title = 'Aurelia';
        config.map([
          { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' , settings: {group: 'Welcome'}},
          { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' , settings: {group: 'Users'}},
          //{ route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' , settings: {group: 'Child'}}
        ]);

      //Mimicking an Api call to get user permissions for additional routes.
      //Must return this promise in order to show data correctly
      //return new Promise((resolve, reject)=>{
      new Promise((resolve, reject)=>{
          console.log('setting config');



          setTimeout(() => {
              window.router = this.router;
                //Uncomment these lines to get routing to work correctly
                // this.router = router;
                // config.title = 'Aurelia';
                // config.map([
                //   { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' , settings: {group: 'Welcome'}},
                //   { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' , settings: {group: 'Users'}},
                //   { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' , settings: {group: 'Child'}}
                // ]);

              console.log('finished config');
              this.router.addRoute({ route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router', settings: {group: 'Child'} });
              this.router.refreshNavigation();

              //this.createNavigationGroups();

              resolve(true);
          }, 2000)

      });


    }

}
