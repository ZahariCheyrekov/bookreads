import { getUserLink } from './getUserLink';

describe('Get user link', () => {
    test('returns correct user link', () => {
        expect(getUserLink('John Doe', 123)).toBe('/user/john-doe/123');
    });
});