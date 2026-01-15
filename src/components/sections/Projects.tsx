import {
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Typography,
} from "@mui/material";

const projects = [
  {
    title: "Resume Website",
    description:
      "A modern, responsive resume website built with React, TypeScript, and Material UI, designed for scalability into a full MERN stack.",
    tech: ["React", "TypeScript", "Vite", "MUI"],
    github: "https://github.com/nousSocrates/noussocrates-resume",
    demo: "https://nousSocrates.github.io/noussocrates-resume",
  },
  {
    title: "Socrates Schools Online",
    description:
      "An online education platform supporting curriculum delivery, assessments, and digital learning resources.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <Box component="section" id="projects">
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: 600,
          color: "primary.main",
        }}
      >
        Projects & Portfolio
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid key={project.title} size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.tech.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: "secondary.main",
                        color: "accent.main",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2 }}>
                {project.github && (
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                    href={project.github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                )}

                {project.demo && (
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: "primary.main",
                    }}
                    href={project.demo}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
