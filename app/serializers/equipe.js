import ApplicationSerializer from './application';

export default class EquipeSerializer extends ApplicationSerializer {
    attrs = {
        players: { embedded: 'always' }
      };
}
