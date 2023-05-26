const uniqid = require('uniqid')
const cubes = [
    {
        id: '1n73sh8holhz66elc',
        name: 'Mirror Cube',
        description: 'A cool mirror cube',
        imageUrl:'https://m.media-amazon.com/images/I/5160wWPanjL._SY355_.jpg',
        difficultyLevel: 4
    },
    {
        id: '2n73sh8holaz66elc',
        name: 'Rubik Cube',
        description: 'Evergreen',
        imageUrl:'https://m.media-amazon.com/images/I/81a7IEinLiL.jpg',
        difficultyLevel: 3
    },
    {
        id: '2n345sh8holaz66elc',
        name: 'Pyramid Cube',
        description: 'Triangular shaped',
        imageUrl:'https://m.media-amazon.com/images/I/51r6IcIjoEL.jpg',
        difficultyLevel: 2
    },
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if(search){
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(from){
        result = result.filter(cube => cube.difficultyLevel >= Number(from))
    }

    if(to){
        result = result.filter(cube => cube.difficultyLevel <= Number(to))
    }

    return result;
}

exports.getOne = (cubeId) => cubes.find( x => x.id == cubeId);

exports.create = (cubeData) =>{

    const newCube = {
        id: uniqid(),
        ...cubeData,
    }
    cubes.push(newCube);

    return newCube;
};