import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
`

export const TopHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 20px;
  background: #231f20;
`

export const AcessRegister = styled.div`
  height: 20px;
  background: #231f20;
  color: white;
  font-size: 0.8em;
  max-width: 1024px;
  margin: 0 auto;
  text-align: right;
  padding: 3px;
  /* margin-right: 15px; */
  padding-right: 15px;
  /* border: solid 2px red; */
`

export const LinkStyle = styled.a`
  color: white;
  padding-left: 5px;
  padding-right: 5px;
`
export const MainHeader = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  /* max-width: 1024px; */
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`
export const Logo = styled.div`
  background-image: url('/img/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  width: 100%;
  margin: 15px;
`
export const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 15px;
`

export const Input = styled.input`
  height: 30px;
  width: 250px;
`
export const Button = styled.button`
  width: 80px;
  height: 30px;
  background: #cc0d1f;
  color: white;
  border: 0;
  font-weight: bold;
`
