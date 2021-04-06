const driver = {
    name: 'Sam'
    
    
};

function updateDriverWithKeyAndValue() {
    return Object.assign({address: '11 Broadway'}, driver);
    
};
function destructivelyUpdateDriverWithKeyAndValue() {
    driver.address = '12 Broadway';
    return driver;
};
