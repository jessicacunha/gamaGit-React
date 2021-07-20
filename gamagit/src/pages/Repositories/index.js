import React, { useEffect, useState } from "react";
import * as S from './styled';

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let respositoriesName = localStorage.getItem('repositoriesName');
        respositoriesName = JSON.parse(respositoriesName);
        console.log(respositoriesName);
        setRepositories(respositoriesName);
        localStorage.clear();
    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { repositories.map(respository => {
                    return (
                        <S.ListItem>{respository}</S.ListItem>
                    )
                })}

            </S.List>
        </S.Container>
    )
}

