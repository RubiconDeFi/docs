import { useEffect, useRef, useState } from 'react'

export function DynamicEndpoint({ children }) {
    const ref = useRef()
    const tokenRef = useRef()
    
    const endpointStyle = {
        marginLeft: '.5rem',
        cursor: 'pointer',
        userSelect: 'none',
        fontWeight: 'bold',
        color: '#0070f3',     
        textDecoration: 'none',
        backgroundColor: '#f3f4f6',
        padding: '0.5em 1em', 
        borderRadius: '0.3em', 
      }

    useEffect(() => {
      if (ref.current) {
        const token = [...ref.current.querySelectorAll('code span')].find(
          el => el.innerText === '"select network endpoint below"'
        )
        tokenRef.current = token
      }
    }, [])
    return (
      <>
        <div ref={ref} style={{ marginTop: '1.5rem' }}>
          {children}
        </div>
        <a
          onClick={() => {
            tokenRef.current.innerText = "https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-optimism-mainnet"
          }}
          style={endpointStyle}
        >
          Optimism Mainnet
        </a>
        <a
          onClick={() => {
            tokenRef.current.innerText = "https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-arbitrum-one"
          }}
          style={endpointStyle}
        >
          Arbitrum One
        </a>
        <a
          onClick={() => {
            tokenRef.current.innerText = "https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-optimism-goerli"
          }}
          style={endpointStyle}
        >
          Optimism Goerli
        </a>
        <a
          onClick={() => {
            tokenRef.current.innerText = "https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-arbitrum-goerli"
          }}
          style={endpointStyle}
        >
          Arbitrum Goerli
        </a>
        <a
          onClick={() => {
            tokenRef.current.innerText = "https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-polygon-mumbai"
          }}
          style={endpointStyle}
        >
          Polygon Mumbai
        </a>
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
        marginTop: '1.5rem',
        marginBottom: '1.5rem',  // Add marginBottom to create space below this component
        marginLeft: '.5rem',
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