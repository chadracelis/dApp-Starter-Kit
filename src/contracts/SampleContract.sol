pragma solidity >=0.4.0 <0.6.0;

contract SampleContract {
    
    struct Dog {
        uint id;
        string name;
        uint age;
        address owner;
    }

    uint public dogCount;

    mapping(uint => Dog) public dogs;

    event dogAdded(
        uint id,
        string name,
        uint age,
        address owner
    );

    function addDog(string memory _name, uint _age) public {
        require(bytes(_name).length > 0, 'there must be a name');
        require(_age >= 0, 'there must be an age');
        dogCount++;
        dogs[dogCount] = Dog(dogCount, _name, _age, msg.sender);
        emit dogAdded(dogCount, _name, _age, msg.sender);
    }

    function findDog(uint _id) public view returns(string memory, uint) {
        return (dogs[_id].name, dogs[_id].age);
    }
}