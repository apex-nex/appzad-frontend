import { NextRequest, NextResponse } from 'next/server';
import { getProjectById } from '@/lib/data';

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const project = await getProjectById(id);
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    // TODO: Add authentication middleware to ensure only admin can update projects
    const { id } = await context.params;
    const body = await request.json();
    
    const existingProject = await getProjectById(id);
    if (!existingProject) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    // TODO: Add database logic to update the project
    const updatedProject = {
      ...existingProject,
      ...body,
      updatedAt: new Date()
    };
    
    console.log(`Updating project ${id} with:`, body);
    
    return NextResponse.json({
      message: 'Project updated successfully',
      project: updatedProject
    });
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    // TODO: Add authentication middleware to ensure only admin can delete projects
    const { id } = await context.params;
    
    const existingProject = await getProjectById(id);
    if (!existingProject) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    // TODO: Add database logic to delete the project
    console.log(`Deleting project ${id}`);
    
    return NextResponse.json({
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}