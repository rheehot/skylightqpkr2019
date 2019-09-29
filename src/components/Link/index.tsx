import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';

const SmallTextStyle = styled.p`
  font-size: 12px;
`;

const LinkStyle = styled.a`
  margin-right: 8px;
  margin-bottom: 8px;
`;

const Link: React.FC = () => {
    return (
        <div className='container'>
            <SectionTitle>LINK</SectionTitle>
            <LinkStyle className="button is-dark" href='https://blog.skylightqp.kr'>
                <b>BLOG</b>
                &nbsp;
                <SmallTextStyle>blog.skylightqp.kr</SmallTextStyle>
            </LinkStyle>

            <LinkStyle className="button is-dark" href='mailto://me@skylightqp.kr'>
                <b>E-MAIL</b>
                &nbsp;
                <SmallTextStyle>me@skylightqp.kr</SmallTextStyle>
            </LinkStyle>

            <br/>
            <LinkStyle className="button is-dark" href='https://t.me/JVMStatic'>
                <b>TELEGRAM</b>
                &nbsp;
                <SmallTextStyle>@JVMStatic</SmallTextStyle>
            </LinkStyle>

            <LinkStyle className="button is-dark" href='https://discordapp.com/users/229015522484682752'>
                <b>DISCORD</b>
                &nbsp;
                <SmallTextStyle>하늘빛QP#5778</SmallTextStyle>
            </LinkStyle>

            <br/>
            <LinkStyle className="button is-dark" href='https://www.acmicpc.net/user/combbm'>
                <b>BAEKJOON</b>
                &nbsp;
                <SmallTextStyle>combbm</SmallTextStyle>
            </LinkStyle>

            <LinkStyle className="button is-dark" href='https://solved.ac/combbm'>
                <b>SOLVED.AC</b>
                &nbsp;
                <SmallTextStyle>combbm</SmallTextStyle>
            </LinkStyle>

            <LinkStyle className="button is-dark" href='https://ask.skylightqp.kr'>
                <b>ASK!</b>
                &nbsp;
                <SmallTextStyle>ask.skylightqp.kr</SmallTextStyle>
            </LinkStyle>
        </div>
    );
};

export default Link;