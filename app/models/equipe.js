import Model,{ attr ,hasMany} from '@ember-data/model';

export default class EquipeModel extends Model {
    @attr('string') nom;
    @attr('string') ville;
    @attr('number') nb_titre;
    @attr('string') champion;
    @hasMany('player') players;


}
