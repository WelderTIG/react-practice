import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h1>Учебный проект</h1>
            <hr />
            <h2>Приложение для работы с Github API и Ethereum.</h2>
            <p>Планируется получать из Github список публичных репозиториев аккаунта и показывать в виде списка.</p>
            <p>Из сети Ethereum планируется получать данные о последнем блоке и о транзакциях в этом блоке.</p>

            <h4>В проекте применяется:</h4>
            <ul>
                <li>React, Redux</li>
                <li>Routing</li>
                <li>CSS modules</li>
                <li>Axios</li>
                <li>Ethers</li>
                <li>Middlewares</li>
                <li>...other</li>
            </ul>
        </div>
    );
};

export default HomePage;