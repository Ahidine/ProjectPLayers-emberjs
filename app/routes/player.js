import Route from '@ember/routing/route';

export default class PlayerRoute extends Route {
    async model(params){
       console.log("hehooo");
       console.log(params.equipe_id)
       data= this.store.query('player', {
               equipe_id : params.equipe_id
           });
           console.log(data);
       

    }
}
