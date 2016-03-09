import {bindable, computedFrom} from 'aurelia-framework';


export class navBarCustomElement{
    @bindable navigation;


    createNavigationGroups(navigation){

       let getGroupName = (nav) => {
           let settings = nav['settings'];
           if(settings){
               return settings['group'];
           } else {
               return nav.group;
           }
       }
       let navigationHasGroupName = (nav) => {
           let settings = nav['settings'];
           if(settings){
               return !!(settings['group']);
           } else {
               return !!(nav.group);
           }
       }

       let newNavigationGroups = new Map();
       let result = [];

       if(navigation) {
           for (var nav of navigation){

               let groupName = getGroupName(nav);

               if(navigationHasGroupName(nav)){
                   if(newNavigationGroups.has(groupName)){
                       newNavigationGroups.get(groupName).push(nav); //Group exists, add to the group
                   } else {
                       newNavigationGroups.set(groupName, [nav]); //Create a new group
                   }
               } else {
                   if(!newNavigationGroups.has(undefined)){
                       newNavigationGroups.set(undefined, [nav]); //Check if undefined group exists and create/add to it
                   } else {
                       newNavigationGroups.get(undefined).push(nav); //Check if undefined group exists and create/add to it
                   }
               }
           }
       }

       result = Array.from(newNavigationGroups, function(g){
           console.log('array from');
           console.log(g);
           let n = {};
           n['name'] = g[0];
           n['navigation'] = g[1];
           return n;
       });
       console.log('array\'d version of map');
       console.log(result);
       return result;
   }

   @computedFrom('navigation')
   get navigationGroups(){
       let result = this.createNavigationGroups(this.navigation)
       console.log(result);
       return result;
   }


}
