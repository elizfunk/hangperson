import 'core-js/stable'
import 'regenerator-runtime/runtime'

import 'jest-styled-components'

import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react/cleanup-after-each'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
