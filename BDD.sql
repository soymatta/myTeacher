CREATE TABLE [horarios_tutores] (
	[id_horario] int IDENTITY(1,1) NOT NULL,
	[id_tutor] nvarchar(max) NOT NULL,
	[day] nvarchar(max) NOT NULL,
	[hourStart] time(7) NOT NULL,
	[hourEnd] time(7) NOT NULL,
	PRIMARY KEY ([id_horario])
);

CREATE TABLE [usuarios] (
	[id] nvarchar(max) NOT NULL,
	[nombre] nvarchar(max) NOT NULL,
	[mail] nvarchar(max) NOT NULL,
	[password] nvarchar(max) NOT NULL,
	[rol] nvarchar(max) NOT NULL,
	PRIMARY KEY ([id])
);

CREATE TABLE [estudiantes] (
	[id_usuario] nvarchar(max) NOT NULL
);

CREATE TABLE [tutores] (
	[id_usuario] nvarchar(max) NOT NULL,
	[modalidad] nvarchar(max) NOT NULL
);

CREATE TABLE [materias] (
	[id] nvarchar(36) NOT NULL,
	[nombre] nvarchar(100) NOT NULL UNIQUE,
	PRIMARY KEY ([id])
);

CREATE TABLE [tutores_materias] (
	[id_tutor] nvarchar(36) NOT NULL,
	[id_materia] nvarchar(36) NOT NULL,
	PRIMARY KEY ([id_tutor], [id_materia])
);

CREATE TABLE [sesiones] (
	[id] nvarchar(36) NOT NULL,
	[id_estudiante] nvarchar(36) NOT NULL,
	[id_tutor] nvarchar(36) NOT NULL,
	[id_materia] nvarchar(36) NOT NULL,
	[lugar_de_clase] nvarchar(200) NOT NULL,
	[fecha] rowversion NOT NULL,
	[duracionHora] int NOT NULL,
	[precio] int NOT NULL,
	[link_videoconferencia] nvarchar(255) NOT NULL,
	PRIMARY KEY ([id])
);

ALTER TABLE [horarios_tutores] ADD CONSTRAINT [horarios_tutores_fk1] FOREIGN KEY ([id_tutor]) REFERENCES [tutores]([id_usuario]);

ALTER TABLE [estudiantes] ADD CONSTRAINT [estudiantes_fk0] FOREIGN KEY ([id_usuario]) REFERENCES [usuarios]([id]);
ALTER TABLE [tutores] ADD CONSTRAINT [tutores_fk0] FOREIGN KEY ([id_usuario]) REFERENCES [usuarios]([id]);

ALTER TABLE [tutores_materias] ADD CONSTRAINT [tutores_materias_fk0] FOREIGN KEY ([id_tutor]) REFERENCES [tutores]([id_usuario]);

ALTER TABLE [tutores_materias] ADD CONSTRAINT [tutores_materias_fk1] FOREIGN KEY ([id_materia]) REFERENCES [materias]([id]);
ALTER TABLE [sesiones] ADD CONSTRAINT [sesiones_fk1] FOREIGN KEY ([id_estudiante]) REFERENCES [estudiantes]([id_usuario]);

ALTER TABLE [sesiones] ADD CONSTRAINT [sesiones_fk2] FOREIGN KEY ([id_tutor]) REFERENCES [tutores]([id_usuario]);

ALTER TABLE [sesiones] ADD CONSTRAINT [sesiones_fk3] FOREIGN KEY ([id_materia]) REFERENCES [materias]([id]);