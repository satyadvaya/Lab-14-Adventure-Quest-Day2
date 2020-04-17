export default function makeUser(formData) {
    
    //     formData.set('name', 'bubbie');
    //     formData.set('class', 'elf');
    
    //     const newUser = {
    //         name: 'bubbie',
    //         class: 'elf',
    //         completed: {},
    //         HP: 30,
    //         gold: 15,
    //     };
        
    //     return newUser;
    // }
    
    const name = formData.get('name');
    const userClass = formData.get('class');
    
    const userObject = {
        name: name,
        class: userClass,
        completed: {},
        HP: 50,
        gold: 0,
    };
        
    return userObject;
}