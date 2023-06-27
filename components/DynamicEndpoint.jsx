import { useEffect, useRef, useState } from 'react'

export function DynamicEndpoint({ children }) {
    const ref = useRef()
    const tokenRef = useRef()
    
    const [selectedEndpoint, setSelectedEndpoint] = useState('');

    const endpoints = {
        "Optimism Mainnet": "https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-optimism-mainnet",
        "Arbitrum One": "https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-arbitrum-one",
        "Optimism Goerli": "https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-optimism-goerli",
        "Arbitrum Goerli": "https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-arbitrum-goerli",
        "Polygon Mumbai": "https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-polygon-mumbai"
    };

    useEffect(() => {
      if (ref.current) {
        const token = [...ref.current.querySelectorAll('code span')].find(
          el => el.innerText === '"select network endpoint below"'
        )
        tokenRef.current = token
      }
    }, [])

    const handleChange = (event) => {
      const endpointUrl = endpoints[event.target.value];
      setSelectedEndpoint(event.target.value);
      if (tokenRef.current) {
        tokenRef.current.innerText = endpointUrl;
      }
    }

    const dropdownStyle = {
        padding: '0.5em 1em',
        borderRadius: '0.3em',
        border: 'none',
        boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
        fontSize: '1em',
        backgroundColor: '#f3f4f6',
        color: '#000000',
        fontWeight: 'bold',
        cursor: 'pointer',
        outline: 'none',
        
    }

    return (
      <>
        <div ref={ref} style={{ marginTop: '1.5rem' }}>
          {children}
        </div>
        <select style={dropdownStyle} value={selectedEndpoint} onChange={handleChange}>
          <option value="">-- Select network endpoint --</option>
          {Object.keys(endpoints).map(endpoint => 
            <option key={endpoint} value={endpoint}>{endpoint}</option>
          )}
        </select>
      </>
    )
  }



  export function MakerAddress({ children }) {
    const ref = useRef()
    const tokenRef = useRef()

    const [inputValue, setInputValue] = useState('')

    const inputStyle = {
        marginRight: '.5rem',
        padding: '.5em',
        backgroundColor: '#f0f0f0', 
        borderRadius: '0.3em',      
        border: 'none', 
        color: '#000000', 
    }

    const componentStyle = {
        
        marginBottom: '1.5rem', 
        
    };

    useEffect(() => {
        if (ref.current) {
            const token = [...ref.current.querySelectorAll('code span')].find(
                el => el.innerText === '"0xinput_address"'
            )
            tokenRef.current = token
        }
    }, [])

    const handleInputChange = (e) => {
        const lowerCaseValue = e.target.value.toLowerCase()
        setInputValue(lowerCaseValue)
        if (tokenRef.current) {
            tokenRef.current.innerText = lowerCaseValue
        }
    }

    return (
        <>
            <div ref={ref} style={componentStyle}>
                {children}
            </div>
            <input
                type="text"
                placeholder="Input maker address" // default text
                value={inputValue}
                onChange={handleInputChange}
                style={inputStyle}
            />
        </>
    )
}