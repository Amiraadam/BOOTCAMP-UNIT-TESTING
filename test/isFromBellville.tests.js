describe('isFromBellville.tests...',function() {
    it('..should return registration number "CY"', function() {
        var fromPaarl = isFromBellville('CJ 123');
        var fromBellville = isFromBellville('CY 123');

    });
});