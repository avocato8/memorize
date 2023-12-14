import styled from 'styled-components';
import { IoIosMore } from 'react-icons/io';
import COLOR from '../utility/color';

const ContentTitle = styled.div`
    width: 468px;
    height: 56px;
    font-size: 17px;
    display: flex;
    align-items: center;

    div {
        width: 100%;
        display: flex;
        align-items: center;
    }
    svg {
        font-size: 25px;
    }
`;

const CategoryCircle = styled.span`
    width: 32px;
    height: 32px;
    background-color: ${COLOR.Memorize_BLUE};
    border-radius: 50%;
    margin-right: 6px;
`;

const ContentBox = styled.div`
    width: 438px;
    height: 438px;
    background-color: white;
    border: 1.2px solid ${COLOR.Memorize_GRAY};
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

// cosnt ContentFooter = styled.div`

// `;


function ContentComp() {
    return (
        <>
            <ContentTitle>
                <div>
                    <CategoryCircle />
                    안녕?
                </div>
                <IoIosMore />
            </ContentTitle>
            <ContentBox>
                근의공식근의공식근의공식근의공식
                근의공식근의공식근의공식근의공식
            </ContentBox>
        </>
    );
}

export default ContentComp;
