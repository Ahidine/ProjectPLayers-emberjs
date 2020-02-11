import Model, {attr,belongsTo} from '@ember-data/model';

export default class PlayerModel extends Model {
    @attr('string') nom;
    @attr('string') prenom;
    @attr('string') poste;
    @belongsTo('equipe') equipe;

}
