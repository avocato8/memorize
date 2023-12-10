import styled from 'styled-components';
import { GoHomeFill, GoSearch } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { IoMdCreate } from 'react-icons/io';

function NavbarComp() {
    return (
        <>
            <NavbarWrapper>
                <Logo>
                    <img src="logo.png" />
                    memorize!
                </Logo>

                <ul>
                    <li>
                        <GoHomeFill />홈
                    </li>
                    <li>
                        <GoSearch />
                        검색
                    </li>
                    <li>
                        <IoMdCreate />
                        만들기
                    </li>
                    <li>
                        <CgProfile />
                        프로필
                    </li>
                </ul>
            </NavbarWrapper>
        </>
    );
}

export default NavbarComp;

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 245px;
    border-right: 1px solid #e8eaeb;
    @media screen and (max-width: 700px) {
        display: none;
    }
    ul {
        color: black;
        margin-top: 45px;
        padding-left: 0px;

        li {
            margin: 10px;
            padding: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            font-size: 18px;
            height: 48px;
            list-style: none;
            transition: 0.2s;
            &:hover {
                background-color: #e8eaeb;
                cursor: pointer;
            }
            svg {
                font-size: 30px;
                color: #1e2e3e;
                padding-right: 10px;
            }
        }
    }
`;

const Logo = styled.div`
    margin-top: 20px;
    font-size: 28px;
    font-weight: 700;
    color: #1e2e3e;
    display: flex;
    align-items: center;
    padding-left: 13px;
    img {
        width: 70px;
    }
    &:hover {
        cursor: pointer;
    }
`;
