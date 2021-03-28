import * as _moment       from 'moment';
import { User }           from './user.model'
import { ProductModel }   from './product.model';

export class PurchaseModel{
    id : number=0;
    date: string = _moment(new Date).format('yyyy-MM-DD HH:mm:ss')
    clients:User;
    products:ProductModel;
}
