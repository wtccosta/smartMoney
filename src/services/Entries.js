import { Alert } from 'react-native';
import {getRealm} from 'realm';

export const saveEntry = async () => {
    const realm = await getRealm();
    let data = {};

    try {
       realm.write(()=> {
            data = {
                id: 'ABC',
                amount: '12.4',
                entryAt: new Date(),
                isInit: false,
            };
    
            realm.create('saveEntry :: data: ', JSON.stringify(data), true);
        });
        console.log(data);
    } catch (error) {
        console.error(
            'saveEntry :: error on save object: ',
            JSON.stringify(data) 
        )
        Alert.alert("Erro ao salvar os dados de lançamento.");

    }

    
   
    return data;
};