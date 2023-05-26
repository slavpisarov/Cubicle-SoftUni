const uniqid = require('uniqid')
const cubes = [
    {
        id: '234jhg2344g23',
        name: 'Mirror Cube',
        description: 'A cool mirror cube',
        imageUrl:'https://m.media-amazon.com/images/I/5160wWPanjL._SY355_.jpg',
        difficultyLevel: 4
    },
    {
        id: '234jhg2344g23',
        name: 'Rubik Cube',
        description: 'Classic',
        imageUrl:'https://m.media-amazon.com/images/I/81a7IEinLiL.jpg',
        difficultyLevel: 3
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