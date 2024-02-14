import styled from 'styled-components';

export const BaseBannerContainer = styled.div`
padding: 20px;
border-radius: 8px;
margin-bottom: 20px;
`;

export const BannerTitle = styled.h2`
  font-size: 24px;
  color: black;
  font-family: 'Arial', sans-serif; 
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerImage = styled.img`
  max-width: 50%;
  height: auto;
  margin-top: 10px;
`;

export const ActionButton = styled.button`
  
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;

  
`;
export const InstagramBannerContainer = styled(BaseBannerContainer)`
  // background-color:#f5abc4;
  // border: 1px solid #e1306c;
  background: linear-gradient(45deg, #f5abc4, #e1306c);
  border: 1px solid #e1306c;
`;

export const InstagramActionButton = styled(ActionButton)`
background-color: #e1306c;

&:hover {
  background-color:  #c12256;
}
`;

export const TwitterBannerContainer = styled(BaseBannerContainer)`display: flex;
flex-direction: column;   
align-items: flex-start;
background-color: #7fc5f0;
border: 1px solid #1da1f2;
`;
export const TwitterActionButton = styled(ActionButton)`
background-color: #1da1f2;

&:hover {
  background-color:  #178ad1;
}
`;

export const TwitterBannerContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const TwitterBannerImage = styled.img`
  max-width: 50%;
  height: auto;
  margin-top: 10px;
  order: 2;
`;

export const TwitterBannerText = styled.div`
  flex-grow: 1; 
  margin-right: 20px; 
  order: 1; 
`;

export const TwitterBannerTitle = styled.h2`
  font-size: 24px;
  color: black;
  font-family: 'Arial', sans-serif;
  margin-bottom: 10px;
`;

export const StoryBannerContainer = styled(BaseBannerContainer)`
background-color: #f7c26d;
border: 1px solid #f39c12;

`;

export const StoryBannerContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  border: 3px solid #f39c12;
  border-radius:8px;
  padding:8px;
 
`;

export const StoryBannerText = styled.div`
  flex-grow: 1; 
  margin-left:20px;
  order: 1; 

`;
export const StoryBannerTitle = styled.h2`
  font-size: 24px;
  color: black;
  font-family: 'Arial', sans-serif;
  margin-left:30%;
`;

export const StoryBannerImage = styled.img`
  max-width: 50%;
  height: 50%;
`;

export const StoryActionButton = styled(ActionButton)`
background-color:#f39c12;
margin-left:40%;

&:hover {
  background-color:  #d68b13;
}
`;
export const Container = styled.div`
  margin-bottom: 20px;
`;

export const CustomInput = styled.input`
  width: 330px;
  padding: 10px;
  margin-top:10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const GenerateButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1879ba;
  }
  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-right: 8px;
`;

export const Button = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? ' #3498db' : '#4caf50')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: ${(props) => (props.selected ? '#1879ba' : '#5cb85c')};
  }
`;
