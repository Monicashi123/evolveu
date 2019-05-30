import City from './City'

test('Test City', () => {
	console.log('Testing create account');
	const newCity = new City(1,'Calgary', 51, -114, 1336000);
    expect(newCity.id).toBe(1);
	expect(newCity.name).toBe('Calgary');
	expect(newCity.latitude).toBe(51);
	expect(newCity.longitude).toBe(-114);
	expect(newCity.population).toBe(1336000);	
	console.log("newCity", newCity)

	//test show
    expect(newCity.show()).toBe('1, Calgary, 51, -114, 1336000')

	// movedIn	
    expect(newCity.movedIn(666)).toBe(1336666)
    console.log('moved in:', newCity.population)

    // movedOut
    expect(newCity.movedOut(6666)).toBe(1330000)
    expect(newCity.movedOut(2000000)).toBe(0)
    // expect(newCity.show()).toBe('Calgary, 51, -114, please be reasonable')
    console.log('moved out:', newCity.population)

    //howBig
	expect(newCity.howBig()).toBe('Hamlet')
    newCity.population = 20000;
    expect(newCity.howBig()).toBe('Large Town')
    newCity.population = 1000;
    expect(newCity.howBig()).toBe('Town')
    newCity.population = 100;
    expect(newCity.howBig()).toBe('Village')
    newCity.population = 1336000;
    expect(newCity.howBig()).toBe('City')
});

test('Test the object references', () => {
    const id = 5
    const name = "Edmonton";
    const latitude = 15;
    const longitude = 156;
    const population = 1000;
    const movedIn = 100;

    const myCity = new City(id, name, latitude, longitude, population);
    const myFav = myCity;
    expect(myCity.id).toBe(5);
    expect(myFav.id).toBe(5);
    expect(myCity.population).toBe(population);
    expect(myFav.population).toBe(population);
    myCity.movedIn(movedIn);
    console.log('New moved in people:',movedIn)
    const newPopulation = population + movedIn;
    console.log('newPop', newPopulation)
    expect(myCity.population).toBe(newPopulation);
    console.log('newPop2', newPopulation)
    expect(myFav.population).toBe(newPopulation);
    console.log('newPop3', newPopulation)
    console.log('newPop4', myFav.population)

});