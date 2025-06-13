import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos(){
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor){
        //RESOLVER
        return await SuperHero.find({[atributo]: valor});
        
        
    }

    async obtenerMayoresDe30(){
        //RESOLVER
        //Tengo que hacer que busque a los superheroes que tengan mas de 30 años, que sean del planeta Tierra y que tengan mas de 1 poder
        return await SuperHero.find({
            edad: { $gt: 30 }, 
            planetaOrigen:{$ne: "Tierra"}, 
            $expr: { $gt: [{ $size: "$poderes" }, 1] },
            
        });
    }
}
export default new SuperHeroRepository();
