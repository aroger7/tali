import { render } from '@testing-library/react';
import React from 'react';
import BarLoader from './BarLoader';

describe('BarLoader', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<BarLoader {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('BarLoader')).toBeTruthy();
    });
});
