-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Maio-2024 às 15:24
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `maquiagem`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `acesso`
--

CREATE TABLE `acesso` (
  `idAcesso` int(11) NOT NULL,
  `nivel` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `acesso`
--

INSERT INTO `acesso` (`idAcesso`, `nivel`) VALUES
(1, 'Administrador'),
(2, 'Funcionario'),
(3, 'Cliente');

-- --------------------------------------------------------

--
-- Estrutura da tabela `agenda`
--

CREATE TABLE `agenda` (
  `idAgenda` int(11) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `funcionario` varchar(30) DEFAULT NULL,
  `dataAgenda` varchar(20) DEFAULT NULL,
  `horario` varchar(5) DEFAULT NULL,
  `fotoAtual` varchar(100) DEFAULT NULL,
  `fotoDesejo` varchar(100) DEFAULT NULL,
  `maquiagem` varchar(30) DEFAULT NULL,
  `pagamento` varchar(30) DEFAULT NULL,
  `situacao` varchar(30) DEFAULT 'Pendente',
  `valor` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `agenda`
--

INSERT INTO `agenda` (`idAgenda`, `idUsuario`, `funcionario`, `dataAgenda`, `horario`, `fotoAtual`, `fotoDesejo`, `maquiagem`, `pagamento`, `situacao`, `valor`) VALUES
(14, 11, 'Eduardo', '05/09/2022', '19:00', 'aa2ebd6989c218bdbe7271f0f3d0fec2.png', 'da234c9ddb1dbfab9b8313a6bb759604.png', 'Artistica', 'Boleto', 'Pendente', '400'),
(42, 23, 'joao', '21/09/2023', '15:00', NULL, NULL, 'Infantil', 'Credito', 'Pendente', '25'),
(43, 23, 'joao', '05/06/2023', '20:00', NULL, NULL, 'Madrinha/Acompanhantes', 'Debito', 'Pendente', '250'),
(44, 23, 'joao', '06/06/2023', '10:00', NULL, NULL, 'Artistica', 'Debito', 'Pendente', '400'),
(45, 24, 'joao', '01/10/2023', '13:00', NULL, NULL, 'Social', 'Pix', 'Pendente', '150'),
(46, 11, 'pedro', ' 22/07/2023', '15:00', '1c13fb6d32cc1204d4c318fd377dde48jpeg', 'f4956189d1c3baaeb48d04d198f2dfa0jpeg', 'Social', NULL, 'Pago', '150');

-- --------------------------------------------------------

--
-- Estrutura da tabela `horarios`
--

CREATE TABLE `horarios` (
  `idHr` int(11) NOT NULL,
  `hora` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `horarios`
--

INSERT INTO `horarios` (`idHr`, `hora`) VALUES
(1, '9hr'),
(2, '11hr'),
(3, '13hr'),
(4, '15hr');

-- --------------------------------------------------------

--
-- Estrutura da tabela `imgbanner`
--

CREATE TABLE `imgbanner` (
  `idBanner` int(11) NOT NULL,
  `urlbanner` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `imgbanner`
--

INSERT INTO `imgbanner` (`idBanner`, `urlbanner`) VALUES
(20, '3bf894dfa9f5e6bfc4caa9a57c982c1bjpeg'),
(21, '5a41fc1bfb83cdb2ca5fa4a96967e9ebjpeg'),
(23, 'be28e3c18f98ef3e8ef97d426c6538d3.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `maquiagem`
--

CREATE TABLE `maquiagem` (
  `idMaquiagem` int(11) NOT NULL,
  `nomeMaquiagem` varchar(30) DEFAULT NULL,
  `valor` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `maquiagem`
--

INSERT INTO `maquiagem` (`idMaquiagem`, `nomeMaquiagem`, `valor`) VALUES
(1, 'Artistica', 400),
(2, 'Debutante', 800),
(3, 'Social', 150),
(4, 'Noiva', 1500),
(5, 'Madrinha/Acompanhantes', 250),
(6, 'Infantil', 25);

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensagem`
--

CREATE TABLE `mensagem` (
  `idMensagem` int(11) NOT NULL,
  `nome` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `assunto` varchar(50) NOT NULL,
  `mensagem` varchar(300) NOT NULL,
  `situacao` varchar(30) DEFAULT 'Pendente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `mensagem`
--

INSERT INTO `mensagem` (`idMensagem`, `nome`, `email`, `assunto`, `mensagem`, `situacao`) VALUES
(8, 'dsadsa', 'paulo@gmail.com', 'agendamento', 'pendente', 'Pendente');

-- --------------------------------------------------------

--
-- Estrutura da tabela `temporario`
--

CREATE TABLE `temporario` (
  `id` int(11) DEFAULT NULL,
  `funcionario` varchar(120) DEFAULT NULL,
  `dataA` varchar(10) DEFAULT NULL,
  `horario` varchar(10) DEFAULT NULL,
  `fotoAtual` varchar(100) DEFAULT NULL,
  `fotoDesejo` varchar(120) DEFAULT NULL,
  `maquiagem` varchar(30) DEFAULT NULL,
  `pagamento` varchar(30) DEFAULT NULL,
  `idTemp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nomeUsuario` varchar(150) NOT NULL,
  `telefoneUsuario` varchar(14) NOT NULL,
  `emailUsuario` varchar(100) NOT NULL,
  `senhaUsuario` varchar(15) NOT NULL,
  `cpfUsuario` varchar(14) NOT NULL,
  `idAcesso` int(11) DEFAULT 3
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nomeUsuario`, `telefoneUsuario`, `emailUsuario`, `senhaUsuario`, `cpfUsuario`, `idAcesso`) VALUES
(11, 'jorge luiz', '(21) 96342-141', 'jorge@gmail.com', '1234', '321.324.235-35', 3),
(16, 'Paulo César', '(21) 96342-141', 'paulo@gmail.com', '1234', '111.111.111-11', 3),
(18, 'Júlio César', '(23) 1342-4324', 'Julio@gmail.com', '123', '424.332.432-43', 3),
(23, 'pedro', '(21)32132-1322', 'pedro@gmail.com', '1234', '121.130.130-13', 2),
(24, 'edson', '(21)9333-4444', 'edson@gmail.com', '1234', '123.321.123-12', 2),
(25, 'Eduardo', '(21) 9322-3212', 'eduardo@gmail.com', '1234', '222.222.222-22', 2),
(26, 'felipe', '(21) 9112-3214', 'felipe@gmail.com', '1234', '444.444.444-44', 1),
(27, 'Vitinho', '(21) 9932-1414', 'vitor@gmail.com', '1234', '666.666.666-66', 1),
(28, 'Kratynho', '(21) 9994-3253', 'crayton@gmail.com', '1234', '932.093.210-39', 1),
(29, 'Felipe', '(12)54624-1987', 'fff@gmail.com', '1234', '121.000.121-03', 3);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `acesso`
--
ALTER TABLE `acesso`
  ADD PRIMARY KEY (`idAcesso`);

--
-- Índices para tabela `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`idAgenda`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Índices para tabela `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`idHr`);

--
-- Índices para tabela `imgbanner`
--
ALTER TABLE `imgbanner`
  ADD PRIMARY KEY (`idBanner`);

--
-- Índices para tabela `maquiagem`
--
ALTER TABLE `maquiagem`
  ADD PRIMARY KEY (`idMaquiagem`);

--
-- Índices para tabela `mensagem`
--
ALTER TABLE `mensagem`
  ADD PRIMARY KEY (`idMensagem`);

--
-- Índices para tabela `temporario`
--
ALTER TABLE `temporario`
  ADD PRIMARY KEY (`idTemp`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `emailUsuario` (`emailUsuario`),
  ADD KEY `idAcesso` (`idAcesso`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `acesso`
--
ALTER TABLE `acesso`
  MODIFY `idAcesso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `agenda`
--
ALTER TABLE `agenda`
  MODIFY `idAgenda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de tabela `horarios`
--
ALTER TABLE `horarios`
  MODIFY `idHr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `imgbanner`
--
ALTER TABLE `imgbanner`
  MODIFY `idBanner` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `maquiagem`
--
ALTER TABLE `maquiagem`
  MODIFY `idMaquiagem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `mensagem`
--
ALTER TABLE `mensagem`
  MODIFY `idMensagem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `temporario`
--
ALTER TABLE `temporario`
  MODIFY `idTemp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `agenda`
--
ALTER TABLE `agenda`
  ADD CONSTRAINT `idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`);

--
-- Limitadores para a tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `idAcesso` FOREIGN KEY (`idAcesso`) REFERENCES `acesso` (`idAcesso`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
