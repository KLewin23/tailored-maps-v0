import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

jest.mock('expo', () => ({
	AppLoading: 'AppLoading'
}))

describe('Main', () => {
	it('renders the loading screen', () => {
		expect(renderer.create(<App />).toJSON()).toMatchSnapshot()
	})

	it('renders the root without loading screen', () => {
		expect(renderer.create(<App skipLoadingScreen />).toJSON()).toMatchSnapshot()
	})
})
