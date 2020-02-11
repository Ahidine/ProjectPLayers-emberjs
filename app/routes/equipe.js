import Route from '@ember/routing/route';

export default class EquipeRoute extends Route {
    async model(){
		return this.store.findAll('equipe');
	}
}
