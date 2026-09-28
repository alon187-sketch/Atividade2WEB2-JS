function	removerDuplicados(inteiros)	{
        return inteiros = new Set(inteiros);
}

console.log(removerDuplicados([1,1,2,2,3,3]));