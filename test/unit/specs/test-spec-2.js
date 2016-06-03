// Testing script - Please delete all of this when you start on a new project

describe('addAddressBookEntry', function(){

    var newEntryFirstName, newEntryLastName, list;

    // 'beforeEach' performs setup before each 'it' test
    beforeEach(function(){
        newEntryFirstName = ko.observable('Peggy');
        newEntryLastName = ko.observable('Hill');
        list = ko.observableArray([]);
    });

    it('Adds an entry to the provided list', function(){
        var initialListLength = list().length;
        addAddressBookEntry(newEntryFirstName, newEntryLastName, list);
        var newListLength = list().length;

        // Jasmine uses the 'expect' function for assertions. Its format is very human-readable.
        // If an expection proves false, it will throw an exception and the assertion will be reported as failed.
        expect(newListLength).toBe(initialListLength + 1);
    });

    it('Adds an entry containing the supplied firstname and surname', function(){
        addAddressBookEntry(newEntryFirstName, newEntryLastName, list);
        var unwrappedList = list();
        var expectedNewEntry = {firstName: 'Peggy', surname: 'Hill'};
        // Jasmine's toContain will, amongst other things, test whether an array contains an object with fields matching a supplied object
        expect(unwrappedList).toContain(expectedNewEntry);
    });

    it('Adds the entry to the end of the list', function(){
        addAddressBookEntry(newEntryFirstName, newEntryLastName, list);
        var unwrappedList = list();
        var lastEntry = unwrappedList[unwrappedList.length - 1];

        // You can have multiple expectations in a Jasmine test
        expect(lastEntry.firstName).toBe('Peggy');
        expect(lastEntry.surname).toBe('Hill');
    });

});
