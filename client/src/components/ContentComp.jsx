import styled from 'styled-components';
import { IoIosMore } from 'react-icons/io';
import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
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
    margin-right: 12px;
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

const ContentFooter = styled.div`
    width: 468px;
    height: 56px;
    font-size: 17px;
    display: flex;
    align-items: center;
    gap: 12px;
    svg {
        font-size: 25px;
    }
`;

const Comment = styled.div`
    width: 468px;
    height: 28px;
    display: flex;
    align-items: center;
    color: ${COLOR.GRAY};
`;

const FooterBorder = styled.div`
    width: 500px;
    height: 29px;
    border-bottom: 1.2px solid ${COLOR.Memorize_GRAY}; 
`;

function ContentComp() {
    return (
        <>
            <ContentTitle>
                <div>
                    <CategoryCircle />
                    근의 공식
                </div>
                <IoIosMore />
            </ContentTitle>
            <ContentBox>
                근의공식근의공식근의공식근의공식
                근의공식근의공식근의공식근의공식
            </ContentBox>
            <ContentFooter>
                <FaRegHeart />
                <FaRegComment />
                <FiSend />
            </ContentFooter>
            <Comment>첫번째 댓글</Comment>
            <Comment>두번째 댓글</Comment>
            <FooterBorder />
        </>
    );
}

export default ContentComp;
