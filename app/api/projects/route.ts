import { NextRequest, NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/data';
import { Project } from '@/types';

export async function GET() {
  try {
    const projects = await getAllProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // TODO: Add authentication middleware to ensure only admin can create projects
    const body = await request.json();
    
    // Validate required fields
    const { title, description, technologies } = body;
    if (!title || !description || !technologies) {
      return NextResponse.json(
        { error: 'Missing required fields: title, description, technologies' },
        { status: 400 }
      );
    }

    // TODO: Add database logic to save the new project
    const newProject: Partial<Project> = {
      ...body,
      id: `proj_${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
      featured: body.featured || false
    };

    console.log('Creating new project:', newProject);
    
    return NextResponse.json(
      { message: 'Project created successfully', project: newProject },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}