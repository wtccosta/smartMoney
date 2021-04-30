import Realm from 'realm';

import CategorySchema from '../schemas/CategoryShema';
import EntrySchema from '../schemas/EntrySchema';

export const getRealm = async () => {
    return Realm.open({
        schema: [CategorySchema, EntrySchema],
        schemaVersion: 1,
    });
};