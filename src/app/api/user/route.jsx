import { NextResponse } from 'next/server';
import verifyToken from '../../../../lib/verifyToken';
import { User } from '../../../../models/User';
import connectDb from '../../../../lib/mongodb';

export async function GET(req) {
    const token = req.headers.get('authorization')?.split(' ')[1];

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const decoded = verifyToken(token);
        await connectDb();

        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
    }
}
