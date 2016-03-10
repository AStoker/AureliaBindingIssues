export class App {


    configureRouter(config, router) {




      //Mimicking an Api call to get user permissions for additional routes
      return new Promise((resolve, reject)=>{
          console.log('setting config');


          setTimeout(() => {
              this.router = router;
              window.router = this.router;


                config.title = 'Aurelia';
                config.map([
                  { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' , settings: {group: 'Welcome'}},
                  { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' , settings: {group: 'Users'}},
                   { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router', settings: {group: 'Child'} }
                ]);

              console.log('finished config');
              //this.router.addRoute({ route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router', settings: {group: 'Child'} });
              //this.router.refreshNavigation();

              //this.createNavigationGroups();

              resolve(true);
          }, 4000)

      });


    }

}
