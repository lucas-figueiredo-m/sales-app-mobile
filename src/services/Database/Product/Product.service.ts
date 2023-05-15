import { DatabaseService } from '../Database';
import { ProductAbstract } from './Product.abstract';

class ProductClass implements ProductAbstract {
  constructor(private database: typeof DatabaseService) {}
}

export const ProdutService = new ProductClass(DatabaseService);
